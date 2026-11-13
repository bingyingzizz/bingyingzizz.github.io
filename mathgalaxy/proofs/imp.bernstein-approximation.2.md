# 紧区间上一致连续 $\implies$ Bernstein 多项式一致逼近
`imp.bernstein-approximation` · 推出 · strong 边 · 根 `../`

`thm.uniform-continuity-compact` 紧集上连续 ⟹ 一致连续 → `thm.bernstein-approximation` Bernstein 多项式逼近

按 $|S_n/n-x|$ 是否小于 $\delta$ 分两段：近处 $|f(S_n/n)-f(x)|<\varepsilon$；远处 $\le2\lVert f\rVert_\infty$，而这情形的概率由 Markov 不等式
$$\mathbb P\Bigl(\Bigl|\frac{S_n}{n}-x\Bigr|\ge\delta\Bigr)\le\frac{1}{4n\delta^{2}}.$$

合并得 $|B_nf(x)-f(x)|\le\varepsilon+\dfrac{\lVert f\rVert_\infty}{2n\delta^{2}}$，与 $x$ 无关。取 $n>\dfrac{\lVert f\rVert_\infty}{2\varepsilon\delta^{2}}$ 便有 $\lVert B_nf-f\rVert_\infty\le2\varepsilon$。$\varepsilon$ 任意，故 $B_nf\rightrightarrows f$。∎

> 唯一的外部输入是紧集上连续 $\implies$ 一致连续；二项矩与 Markov 不等式都在边里现算。
