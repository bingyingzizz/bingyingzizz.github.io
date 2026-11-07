# Euler 示性数与亏格　`prop.eulerchar-genus`　·　说明
根 `../`

⚠ **本节点保持 status: skeleton。** 缺口不在计算，而在「任意闭可定向曲面化到标准形」这一步：它要 `thm.classification-surfaces`（骨架），或等价地要 $\beta_{2}(S)=1$（闭可定向曲面的基本类），后者本图没有节点。下面把能完整写出的部分写满，并标清缺口。

**一、标准形上的计数（完整）**：把 $g$ 个环面的连通和画成 $4g$ 边形，边按 $a_{1}b_{1}a_{1}^{-1}b_{1}^{-1}\cdots$ 配对；取中心扇形三角剖分：顶点 $2$（中心 + 一个边界顶点类）、边 $2g$（配对边界边）$+4g$（辐条）$=6g$、面 $4g$。故 $\chi=2-6g+4g=2-2g$。$g=1$ 即 $\chi(T^{2})=0$；与具体剖分无关（`thm.euler-characteristic` 配合 `thm.simplicial-approximation`）。

> 续见 notes/prop.eulerchar-genus.2.md
