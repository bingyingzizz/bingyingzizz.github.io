# 线性方程组的解结构　`thm.linear-system-solutions`　·　说明
根 `../`

⭐ 「解集 = 特解 + 齐次解」是线性代数的中心图景：**非齐次没有结构，齐次才有**（它是子空间），非齐次只是它的一个平移（仿射子空间）。

⭐ 维数公式 $n - \operatorname{rank} A$ 就是秩-零化度定理的方程组版本：变量数 $n$ = 约束掉的 $\operatorname{rank} A$ + 自由的 $\dim \ker A$。

⚠ 「有解 $\iff$ $\operatorname{rank} A = \operatorname{rank}(A \mid b)$」的几何意思：$b$ 落在 $A$ 的列空间里。别把它误记成「rank A = m」（那是有解**且解唯一**的条件）。
