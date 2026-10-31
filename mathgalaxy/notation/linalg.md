# 记号表 · 线性代数
根 `../`　·　索引 `notation.md`

- `\vdots` ⋮　**矩阵里的竖省略号** — 配套：横 $\cdots$、斜 $\ddots$。⚠️ 列向量里写 `\begin{pmatrix} c_1 \\ \vdots \\ c_n \end{pmatrix}` 时中间那行的 `\\`（源码四个反斜杠）不能少。
- `\begin{pmatrix} a & b \\ c & d \end{pmatrix}` 矩阵　**矩阵的排版** — 用 `\begin{pmatrix}`（圆括号）或 `bmatrix`（方括号）；矩阵内换行写 `\\`（源码里是四个反斜杠），列用 `&` 分隔。省略号：竖 $\vdots$、横 $\cdots$、斜 $\ddots$。
- `\dim V` dim V　**向量空间的维数** — 写成算子形式 `\dim V`（KaTeX 自带 `\dim`，不加参数）。⚠️ 与「维度」的日常用法无关：这里指基的势。
- `\ker T` ker T　**线性映射的核** — 与集合论的 $ker$ 无关；线性映射的核是 $T^{-1}(0)$，是子空间。
- `\operatorname{im} T` im T　**线性映射的像** — 有参数的名字用 `\operatorname{im}`，不写 `\mathrm{im}`。
- `\operatorname{rank} T` rank T　**映射的秩（$= \dim \operatorname{im} T$）**
- `\operatorname{n

> 续见 notation/linalg.2.md
