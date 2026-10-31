# Arzelà–Ascoli 在全纯函数族上就是 Montel 定理
`imp.derived-montel-from-ascoli` · 推出 · strong 边 · 根 `../`

`thm.arzela-ascoli` Arzelà–Ascoli 定理 + `thm.cauchy-inequality` Cauchy 不等式 → `thm.montel` Montel 定理

设 $\mathcal{F}$ 在区域 $\Omega$ 上局部一致有界，$f_{n}$ 是其中一列。

**① 一个紧集上的两条前提。** 取紧的 $K \subset \Omega$，令 $\rho = \operatorname{dist}(K, \partial \Omega) > 0$，取 $K \subseteq \Omega$ 的内点集 $K_{\rho/2} = \{ z : \operatorname{dist}(z, K) \le \rho/2 \}$。局部一致有界 $\implies$ 存在 $M$ 使 $|f| \le M$ 在 $K_{\rho/2}$ 上一族一致地成立。于是

> 续见 proofs/imp.derived-montel-from-ascoli.2.md
