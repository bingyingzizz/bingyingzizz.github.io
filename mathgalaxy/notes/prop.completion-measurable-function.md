# 完备化后可改在零集上　`prop.completion-measurable-function`　·　说明
根 `../`

直观：完备化只多加了零集的子集，所以 $\bar{\mathcal{M}}$可测函数与 $\mathcal{M}$可测函数只差在零集上的取值。

证明思路：先看 $f = \chi_E$ 的情形（此时 $E = E' \cup F$，$E' \in \mathcal{M}$、$F$ 含于零集，取 $g = \chi_{E'}$）；对 $\mathcal{M}$可测的简单函数显然；一般情形取简单函数列 $\{\varphi_n\} \to f$，每个 $\varphi_n$ 在某个 $\bar{\mathcal{M}}$零集 $E_n$ 外等于一个 $\mathcal{M}$可测的 $\psi_n$。把零集并起来得 $N \in \mathcal{M}$，$\mu(N) = 0$，$N \supseteq \bigcup E_n$，令



$$g = \lim_n \chi_{N^c} \cdot \varphi_n$$



则 $g = f$ 在 $N^c$ 上成立，且 $g$ 是 $\mathcal{M}$可测的。
