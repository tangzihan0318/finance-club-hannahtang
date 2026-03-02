import Container from "@/app/_components/container";
import Link from "next/link";

// 模拟讲座数据（之后可以改成从文件读取）
const lectures = [
  {
    id: 1,
    title: "Lecture 1: Introduction to Finance",
    date: "2026-02-28",
    speaker: "Prof. Smith",
    description: "金融学入门：货币时间价值、金融市场概述",
    slug: "lecture-1-intro-to-finance"
  },
  {
    id: 2,
    title: "Lecture 2: Stock Market Basics",
    date: "2026-03-07",
    speaker: "Dr. Johnson",
    description: "股票市场基础：如何看K线图、交易机制",
    slug: "lecture-2-stock-market-basics"
  },
  {
    id: 3,
    title: "Lecture 3: Portfolio Management",
    date: "2026-03-14",
    speaker: "Prof. Williams",
    description: "投资组合管理：风险分散、资产配置",
    slug: "lecture-3-portfolio-management"
  }
];

export default function LectureReview() {
  return (
    <main>
      <Container>
        {/* 页面标题 */}
        <div className="mt-16 mb-12">
          <h1 className="text-5xl font-bold mb-4">📚 Lecture Reviews</h1>
          <p className="text-xl text-gray-600">
            回顾往期讲座，巩固金融知识
          </p>
        </div>

        {/* 讲座列表 */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {lectures.map((lecture) => (
            <Link
              key={lecture.id}
              href={`/lecture-review/${lecture.slug}`}
              className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600">
                  {lecture.title}
                </h2>
                <span className="text-sm text-gray-500">{lecture.date}</span>
              </div>
              <p className="text-gray-600 mb-3">{lecture.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>👨‍🏫 {lecture.speaker}</span>
                <span className="mx-2">·</span>
                <span className="text-blue-600">阅读全文 →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* 返回首页链接 */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← 返回首页
          </Link>
        </div>
      </Container>
    </main>
  );
}
