# 振幅判据 + 零测集 $\implies$ Lebesgue 判据
`imp.riemann-lebesgue` · 推出 · strong 边 · 根 `../`

`thm.riemann-criterion` 可积的振幅判据 + `def.null-set` 零集与完备 → `thm.riemann-lebesgue-criterion` 可积 ⟺ 不连续点零测

更精细地取 $\varepsilon / k$ 代替 $1/k$，可得 $\sum_j |J_{k,j}| < \varepsilon$。所以集合 $D_k := \bigcup_j J_{k,j}$ 是零测集的「$\varepsilon$-近似」。

4. 现在关键的一步：$D \subseteq \bigcup_{k} \overline{D_k}$ —— 若 $f$ 在 $x$ 处不连续，则 $f$ 在该点的振幅 $\omega(f, x) > 1/k$ 对某个 $k$ 成立，于是 $x$ 属于那些长度可以任意小的区间的闭包。于是 $D$ 被可数多个零测集覆盖，本身是零测集。∎

> ($\Longleftarrow$) 的 2 与 3 是「**紧性 + 零测**」的标准组合拳：把不连续点用总长度很小的开集包起来，剩下的紧集上连续函数一致连续。这一招在后面（Lusin 定理、Egorov 定理）会反复出现。
