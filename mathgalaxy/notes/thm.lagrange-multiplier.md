# Lagrange 乘子法　`thm.lagrange-multiplier`　·　说明
根 `../`

⭐ 几何读法：约束集 $M = g^{-1}(0)$ 在正则点 $a$ 附近的切空间是 $T_aM = \ker Dg(a)$（`thm.regular-value`）。「$a$ 是 $f|_{M}$ 的极值点」蕴含 $Df(a)$ 在 $T_aM$ 上恒为零，即 $\ker Dg(a) \subseteq \ker Df(a)$。剩下的全是**线性代数**：两个线性映射的核有这种包含关系时，$\nabla f(a)$ 落在 $\nabla g_i(a)$ 张成的空间里（对偶空间里取正交补即可）。

⚠ $\operatorname{rank} Dg(a) = m$（即 $a$ 是 $g^{-1}(0)$ 的正则点）这个前提不能去：$g(x, y) = x^{2} + y^{2}$ 的零点集是单点 $\{(0,0)\}$，那里 $Dg = 0$、秩为 $0$，乘子法给不出任何信息（而该点显然是极值点）。

⭐ 使用要点：乘子法只给**必要**条件，解出候选点后仍需比较；而且 $\lambda_i$ 本身有含义（约束对最优值的灵敏度 $\partial f^{\ast}/\partial c_i$）。
