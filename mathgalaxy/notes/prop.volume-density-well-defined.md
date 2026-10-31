# 密度与定向无关　`prop.volume-density-well-defined`　·　说明
根 `../`

**绝对值是开方给的**：$\partial_{y^{i}} = \sum_{k}(\partial x^{k}/\partial y^{i})\partial_{x^{k}}$，故 $g^{y} = J^{\mathsf T}g^{x}J$（$J = \partial x/\partial y$），取行列式得 $\det g^{y} = (\det J)^{2}\det g^{x}$。开方时 $\det J$ 的符号被吃掉，$|\det J|$ 留下 —— 再来一个 $|\det J|^{-1}$ 就正好抵消。**这一步是整条命题的全部内容**。

**拼成整体测度**：局部密度在重叠处相等，剩下的只是把它加成测度。用从属于卡族的单位分解 $\{\rho_{\alpha}\}$（`prop.paracompact-partition-unity`）定义 $\mu_{g}(f) := \sum_{\alpha}\int_{\mathbb{R}^{n}}(\rho_{\alpha}f)\circ x_{\alpha}^{-1}\,\sqrt{\det g}\ \mathrm{d}x$；每项非负、和有限，正性与可数可加性逐块相加即得。

**二维时这条就是 `def.area-element` 的注记**：「面积元是密度、不是形式」—— 换参数化时 $\sqrt{\det g}$ 与 $\mathrm{d}u\,\mathrm{d}v$ 一起变，乘积不变且不变号。$n$ 维只是把 $2\times2$ 的 Gram 行列式换成 $n\times n$ 的。

> 续见 notes/prop.volume-density-well-defined.2.md
