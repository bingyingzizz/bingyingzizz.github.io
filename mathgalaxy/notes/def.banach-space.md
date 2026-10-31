# Banach 空间　`def.banach-space`　·　说明
根 `../`

⭐ 三个标准范例：$\mathbb{R}^{n}$（完备性就是 `thm.real-complete-metric` 的有限维版本）、$L^{p}$（`thm.lp-banach`，Riesz–Fischer）、紧 Hausdorff 空间上的 $C(S)$ 配上确界范数。

⚠ 完备性不是自动的：$C[0, 1]$ 配上 $\|f\|_{1} = \int_0^1 |f|$ **不**完备（可以逼近出不连续函数）。同一批函数换个范数就完备、换回来就不完备 —— 「完备」是范数的性质，不是集合的性质。

⭐ 完备性是下面压缩映射原理的引擎（`thm.banach-fixed-point`）：没有它只能拿到 Cauchy 列，拿不到不动点。整条「逆映射定理」的构造性证明都靠这一条撑着。
