import { Card, CardContent, CardFooter, CardHeader } from "@/components/shadcnui/card";
import { InputGroupAddon, InputGroupButton, } from "@/components/shadcnui/input-group";
import { Separator } from "@/components/shadcnui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FLASH R",
  description: "Welcome to FLASH R - Your Ultimate Resource Hub",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
     <Card className="pb-30 w-[90vw] max-w-3xl">
      <CardHeader className=" font-extrabold fill-black text-center">FLASH R</CardHeader>
      <Separator />
      <CardContent>



      </CardContent>
        <CardFooter className="flex flex-col gap-4">
         

        <InputGroupAddon>

               <InputGroupButton>Go</InputGroupButton>
               <InputGroupButton>Stop</InputGroupButton>

          </InputGroupAddon>

       </CardFooter>

     </Card>
    </section>
  );
};

export default page;
