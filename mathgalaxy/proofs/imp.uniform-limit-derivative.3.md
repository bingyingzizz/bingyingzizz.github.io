# 中值定理 + 一致收敛 $\implies$ 导数与极限可交换
`imp.uniform-limit-derivative` · 推出 · strong 边 · 根 `../`

`def.uniform-convergence` 一致收敛 + `thm.mvt` Lagrange 中值定理 + `thm.uniform-limit-continuous` 一致收敛保连续 → `thm.uniform-limit-derivative` 导数与极限交换

3. 在 $n \to \infty$ **之后**再令 $h \to 0$：$\varphi(h) = \lim_n \varphi_n(h) = \lim_n f_n'(\xi_n(h))$，而 $f_n' \rightrightarrows g$ 给出 $\varphi(h) \to g(x)$。两个极限交换的合法性来自 $f_n'$ 的一致收敛（同第 1 步的估计）。故 $f'(x) = g(x)$。∎

> 第 1 步是关键的准备：**假设 $f_n'$ 一致收敛，就能白送 $f_n$ 的一致收敛**。这也说明了为什么这条定理比积分那条「贵」—— 需要额外的一个收敛点 $x_0$ 来定住那个自由常数。
