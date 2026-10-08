# 要么奇异、要么有下界　`lem.singular-or-lower-bound`　·　说明
根 `../`

这是 Radon–Nikodym 证明里的**关键一步**：它提供了一个「往下顶」的 $\varepsilon$，从而可以造出那个上确界函数 $f$。

证明用的手法很典型：对每个 $n$，取 $\nu - n^{-1} \mu$ 的一个 Hahn 分解 $X = P_n \sqcup  N_n$。令



$$P = \bigcup_n P_n, \quad  N = \bigcap_n N_n$$



$N$ 是每个 $\nu - n^{-1}\mu$ 的负集，于是 $0 \le \nu(N) \le n^{-1} \mu(N)$ 对一切 $n$ 成立，令 $n \to \infty$ 得 $\nu (N) = 0$。

于是若 $\mu (P) = 0$，则 $\nu \perp \mu$（取 $E = P$、$F = N$）；若 $\mu (P) > 0$，则某个 $n$ 有 $\mu (P_{n}) > 0$，而 $P_{n}$ 是 $\nu - n^{-1}\mu$ 的正集，即 $\nu \ge n^{-1} \mu$ 在 $P_{n}$ 上成立。∎
