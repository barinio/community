import { Image } from "@nextui-org/image";
// import { useTranslations } from "next-intl";

import { dataCommitment, CommitmentItem } from "../data";

export interface PageProps {
  params: { id: string };
}

export default function OurCommitItem({ params }: PageProps) {
  const id = params.id;
  // const t = useTranslations("BlogPage");

  const blogItem: CommitmentItem | undefined = dataCommitment.find(
    (item) => item.id === id
  );

  if (!blogItem) {
    return (
      <div>
        Error
        {/* {t("blogDetailErrorMsg")} */}
      </div>
    );
  }

  return (
    <>
      {/* <h1 className="font-bold text-4xl text-center uppercase w-full text-[#000] bg-prim-color py-10 mb-32">
        {t(blogItem.title)}
      </h1> */}

      <section className="max-w-[1280px] px-12">
        <div className="clearfix">
          <div className="w-[311px] float-left  mt-2  mr-10 mb-5 ">
            <Image
              // alt={blogItem.title}
              // alt={t(`${blogItem.title}`)}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              width={311}
              // height={365}
              src={blogItem.img.src}
              radius="none"
            />
          </div>
          {blogItem.description.map((item, index) => (
            <p key={index} className="text-xl mb-3 last:mb-14">
              {item}
              {/* {t(item)} */}
            </p>
          ))}
        </div>

        <p className="text-xl text-[#D1A75B] mb-3">
          {"-"}
          {/* {t(blogItem.autor)} */}
        </p>
        <p className="text-xl">{/* {t(blogItem.role)} */}</p>
      </section>
      {/* </section> */}
    </>
  );
}
