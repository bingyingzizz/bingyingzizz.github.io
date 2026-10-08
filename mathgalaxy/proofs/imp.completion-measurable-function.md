# 完备化定理 $\implies$ 完备空间上的可测函数可改在零集上
`imp.completion-measurable-function` · 推出 · strong 边 · 根 `../`

`thm.completion` 完备化定理 → `prop.completion-measurable-function` 完备化后可改在零集上

完备化 $(X, \bar{\mathcal{M}}, \bar{\mu})$ 相对 $(X, \mathcal{M}, \mu)$ 只多做了一件事：**把零集的子集也收进 $\sigma$代数**。所以两个 $\sigma$代数只在零集上不同。

先取 $f = \chi_E$：此时 $E = E' \cup F$，$E' \in \mathcal{M}$、$F$ 含于某个 $\mathcal{M}$零集，取 $g = \chi_{E'}$ 即有 $f = g$ a.e.。对 $\mathcal{M}$可测的简单函数显然成立（有限线性组合）。

一般情形取简单函数列 $\varphi_n \to f$，每个 $\varphi_n$ 在一个 $\bar{\mathcal{M}}$零集 $E_n$ 外等于某个 $\mathcal{M}$可测的 $\psi_n$。把 $N := \bigcup_n E_n$ 并起来（可数并仍是零集），令 $g := \lim_n \chi_{N^c} \cdot \varphi_n$ —— 它在 $N^c$ 上等于 $f$，且作为 $\mathcal{M}$可测函数的极限仍 $\mathcal{M}$可测。∎
