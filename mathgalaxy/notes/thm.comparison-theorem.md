# 比较定理　`thm.comparison-theorem`　·　说明
根 `../`

**证明（一）存在性：逐层抬升。**
第 $0$ 层：$f\varepsilon_{P} : P_{0} \to N$ 沿满射 $\varepsilon_{Q} : Q_{0} \twoheadrightarrow N$ 抬升。$P_{0}$ 投射，故存在 $\varphi_{0} : P_{0} \to Q_{0}$ 使 $\varepsilon_{Q}\varphi_{0} = f\varepsilon_{P}$ ✓。
归纳步：设 $\varphi_{n} : P_{n} \to Q_{n}$ 已造好，且 $e_{n}\varphi_{n} = \varphi_{n-1}d_{n}$。要造 $\varphi_{n+1}$，只需使 $e_{n+1}\varphi_{n+1} = \varphi_{n}d_{n+1}$。令 $\theta := \varphi_{n}d_{n+1} : P_{n+1} \to Q_{n}$，算一下：
$$e_{n}\theta = e_{n}\varphi_{n}d_{n+1} = \varphi_{n-1}d_{n}d_{n+1} = 0,$$
所以 $\operatorname{im}\theta \subseteq \ker e_{n} = \operatorname{im} e_{n+1}$（两端的复形都正合）✓。沿满射 $Q_{n+1} \twoheadrightarrow \operatorname{im} e_{n+1}$ 用 $P_{n+1}$ 的投射性抬升 $\theta$，得 $\varphi_{n+1}$ ✓。

> 续见 notes/thm.comparison-theorem.2.md
