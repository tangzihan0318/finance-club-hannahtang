import Container from "@/app/_components/container";
import Link from "next/link";

// 模拟资源数据
const resources = [
  {
    id: 1,
    title: "📊 投资分析模板",
    type: "Excel 模板",
    category: "工具",
    date: "2026-03-01",
    description: "包含DCF估值、比率分析、投资组合跟踪的专业Excel模板",
    size: "2.3 MB",
    downloads: 156,
    slug: "investment-analysis-template"
  },
  {
    id: 2,
    title: "Lecture 1: 金融入门",
    type: "PDF 课件",
    category: "课件",
    date: "2026-02-28",
    description: "第一讲课件：货币时间价值、金融市场概述",
    size: "4.1 MB",
    downloads: 89,
    slug: "lecture-1-intro-to-finance"
  },
  {
    id: 3,
    title: "股票技术分析指南",
    type: "PDF 电子书",
    category: "学习资料",
    date: "2026-02-25",
    description: "从零开始学习K线图、均线、MACD等技术指标",
    size: "8.5 MB",
    downloads: 234,
    slug: "technical-analysis-guide"
  },
  {
    id: 4,
    title: "金融术语中英对照表",
    type: "PDF",
    category: "参考",
    date: "2026-02-20",
    description: "300+常用金融术语中英文对照，适合初学者",
    size: "1.2 MB",
    downloads: 412,
    slug: "financial-terms-glossary"
  },
  {
    id: 5,
    title: "Bloomberg 终端快捷键指南",
    type: "PDF",
    category: "工具",
    date: "2026-02-18",
    description: "最常用的Bloomberg功能和快捷键速查表",
    size: "0.8 MB",
    downloads: 67,
    slug: "bloomberg-shortcuts"
  },
  {
    id: 6,
    title: "CFA Level 1 公式汇总",
    type: "PDF",
    category: "考试资料",
    date: "2026-02-15",
    description: "CFA一级考试核心公式整理，含例题",
    size: "3.2 MB",
    downloads: 178,
    slug: "cfa-level1-formulas"
  }
];

// 分类标签
const categories = ["全部", "课件", "工具", "学习资料", "参考", "考试资料"];

export default function LatestResources() {
  return (
    <main>
      <Container>
        {/* 页面标题 */}
        <div className="mt-16 mb-8">
          <h1 className="text-5xl font-bold mb-4">📄 Latest Resources</h1>
          <p className="text-xl text-gray-600">
            最新学习资料、课件和工具，助力你的金融学习
          </p>
        </div>

        {/* 分类筛选（静态展示，之后可以加筛选功能） */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 资源列表 */}
        <div className="grid gap-4 max-w-4xl mx-auto">
          {resources.map((resource) => (
            <Link
              key={resource.id}
              href={`/latest-resources/${resource.slug}`}
              className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                  {resource.title}
                </h2>
                <span className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                  {resource.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-3">{resource.description}</p>
              
              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                <span className="flex items-center">
                  📄 {resource.type}
                </span>
                <span className="flex items-center">
                  📦 {resource.size}
                </span>
                <span className="flex items-center">
                  📅 {resource.date}
                </span>
                <span className="flex items-center">
                  ⬇️ {resource.downloads} 下载
                </span>
              </div>
              
              <div className="mt-3 text-blue-600 text-sm">
                查看详情 →
              </div>
            </Link>
          ))}
        </div>

        {/* 返回首页 */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← 返回首页
          </Link>
        </div>
      </Container>
    </main>
  );
}
