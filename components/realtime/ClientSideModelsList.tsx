"use client";

import { Button } from "@/components/ui/button";
import { Database } from "@/types/supabase";
import { modelRowWithSamples } from "@/types/utils";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaImages } from "react-icons/fa";
import ModelsTable from "../ModelsTable";

export const revalidate = 0;

type ClientSideModelsListProps = {
  serverModels: modelRowWithSamples[] | [];
};

export default function ClientSideModelsList({
  serverModels,
}: ClientSideModelsListProps) {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
  const [models, setModels] = useState<modelRowWithSamples[]>(serverModels);

  useEffect(() => {
    const channel = supabase
      .channel("realtime-models")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "models" },
        async (payload: any) => {
          const samples = await supabase
            .from("samples")
            .select("*")
            .eq("modelId", payload.new.id);

          const newModel: modelRowWithSamples = {
            ...payload.new,
            samples: samples.data,
          };

          const dedupedModels = models.filter(
            (model) => model.id !== payload.old?.id
          );

          setModels([...dedupedModels, newModel]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, models, setModels]);

  return (
    <div id="train-model-container" className="max-w-7xl mx-auto px-6 py-8 bg-white dark:bg-gray-900">
      {models && models.length > 0 ? (
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Your Models</h1>
            <Link href="/overview/models/train">
              
                <Button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow hover:shadow-lg transition-all ease-in-out duration-300">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  Train New Model
                </Button>
              
            </Link>
          </div>
          <ModelsTable models={models} />
        </div>
      ) : (
        <div className="text-center py-12">
          <FaImages size={64} className="mx-auto text-gray-400" />
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mt-6">
            Get Started by Training Your First Model
          </h1>
          <Link href="/overview/models/train">
            
              <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                Train Model
              </Button>
            
          </Link>
        </div>
      )}
    </div>
  );
}
