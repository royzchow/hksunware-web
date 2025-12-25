import config from "@config/config.json";
import ImageFallback from "@layouts/components/ImageFallback";
import dateFormat from "@lib/utils/dateFormat";
import Link from "next/link";
import { FaRegCalendar, FaUserAlt } from "react-icons/fa";

const Post = ({ post }) => {
  const { summary_length, blog_folder } = config.settings;
  const { meta_author } = config.metadata;
  // const author = post.frontmatter.author ? post.frontmatter.author : meta_author;
  return (
    <div className="post">
      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          {/* Left: Image */}
          <div className="w-2/5">
            <img
              src="/images/logo.png"
              alt="sample"
              className="w-4/5 h-auto object-contain"
            />
          </div>

          {/* Right: Two red boxes (horizontal) */}
          <div className="w-3/5 flex gap-1">
            <div style={{ background: '#e30615' }} className="flex-1 text-white p-0 rounded">
              <p style={{ textAlign: 'center' }} className="
                text-[2vw] 
                md:text-[1vw] 
                lg:text-[1vw]
                xl:text-[12px]
              ">硑機報價</p>
            </div>

            <div style={{ background: '#e30615' }} className="flex-1 text-white p-0 rounded">
              <p style={{ textAlign: 'center' }} className="
                text-[2vw] 
                md:text-[1vw] 
                lg:text-[1vw]
                xl:text-[12px]
              ">散件零售</p>
            </div>
          </div>
        </div>

        <h3 className="
          text-[4vw] 
          md:text-[2vw] 
          lg:text-[2vw]
          xl:text-[26px]
        ">{post.name}</h3>
        <div style={{ height: 10 }} />
        <div className="flex flex-row gap-0">
          {/* Image */}
          <div className="w-full md:w-4/5">
            <ImageFallback
              className="rounded w-full object-cover"
              src={post.image}
              alt={post.name}
              width={405}
              height={208}
            />
          </div>

          {/* RIGHT: vertical image + word + image + word */}
          <div className="w-1/5 flex flex-col text-black">
            <div className="flex flex-col items-center gap-0">
              <img
                src="/images/facebook_QR_code.png"
                alt="icon 1"
                className="w-8 h-8"
              />
              <div style={{ height: 3 }} />
              <p className="
                mb-0
                pb-0
                text-[1.2vw] 
                md:text-[0.6vw] 
                lg:text-[0.6vw]
                xl:text-[8px] text-center">Facebook</p>
              <p className="
                mt-0
                pt-0
                text-[1.2vw] 
                md:text-[0.6vw] 
                lg:text-[0.6vw]
                xl:text-[8px] text-center">Like! 讚好!</p>
            </div>
            <div style={{ height: 10 }} />
            <div className="flex flex-col items-center gap-0">
              <img
                src="/images/instagram_QR_code.png"
                alt="icon 2"
                className="w-8 h-8"
              />
              <div style={{ height: 3 }} />
              <p className="
                mb-0
                pb-0
                text-[1.2vw] 
                md:text-[0.6vw] 
                lg:text-[0.6vw]
                xl:text-[8px] text-center">Instagram</p>
              <p className="
                mt-0
                pt-0
                text-[1.2vw] 
                md:text-[0.6vw] 
                lg:text-[0.6vw]
                xl:text-[8px] text-center">Like! 讚好!</p>
            </div>
          </div>
        </div>
        <div style={{ height: 10 }} />
        <div className="text-black">
          {post.items && post.items.length > 0 && (
            <div className="flex flex-col gap-1">
              {post.items.map((item) => (
                <h3 key={item.id} className="
                font-[400]
                mt-0
                pt-0
                text-[1.2vw] 
                md:text-[0.6vw] 
                lg:text-[0.6vw]
                xl:text-[8px]
                leading-none">
                  {item.displayName}
                </h3>
              ))}
            </div>
          )}
        </div>
        <div style={{ height: 10 }} />
        <div className="flex justify-between items-center w-full font-sans text-black">
          {/* First image + word */}
          <div className="flex items-center gap-1">
            <img src="/images/whatsapp.png" className="!w-3 !h-3" alt="icon" />
            <span className="font-bold
              text-[1.5vw] 
              md:text-[0.75vw] 
              lg:text-[0.8vw]
              xl:text-[12px]
              leading-none">+852 6291 1164</span>
          </div>
          {/* Last word */}
          <span style={{ color: "#e30615" }} className="font-bold
            text-[1.5vw] 
            md:text-[0.75vw] 
            lg:text-[0.8vw]
            xl:text-[12px]
            leading-none">黃金商場地庫L04、L44</span>
        </div>
        {/* <ul className="absolute top-3 left-2 flex flex-wrap items-center">
          {post.frontmatter.categories.map((tag, index) => (
            <li
              className="mx-2 inline-flex h-7 rounded-[35px] bg-primary px-3 text-white"
              key={"tag-" + index}
            >
              <Link
                className="capitalize"
                href={`/categories/${tag.replace(" ", "-")}`}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
      {/* <h3 className="h5 mb-2 mt-4">
        <Link
          href={`/${blog_folder}/${post.slug}`}
          className="block hover:text-primary"
        >
          {post.frontmatter.title}
        </Link>
      </h3>
      <ul className="flex items-center space-x-4">
        <li>
          <Link
            className="inline-flex items-center font-secondary text-xs leading-3"
            href="/about"
          >
            <FaUserAlt className="mr-1.5" />
            {author}
          </Link>
        </li>
        <li className="inline-flex items-center font-secondary text-xs leading-3">
          <FaRegCalendar className="mr-1.5" />
          {dateFormat(post.frontmatter.date)}
        </li>
      </ul>
      <p>{post.content.slice(0, Number(summary_length))}</p>
      <Link
        className="btn btn-outline-primary mt-4"
        href={`/${blog_folder}/${post.slug}`}
      >
        Read More
      </Link> */}
    </div>
  );
};

export default Post;
