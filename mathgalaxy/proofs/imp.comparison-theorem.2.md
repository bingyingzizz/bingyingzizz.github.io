# imp.comparison-theorem
`imp.comparison-theorem` · 推出 · strong 边 · 根 `../`

`def.resolution` 消解 + `def.projective-object` 投射 / 内射对象 + `def.chain-homotopy` 链同伦 → `thm.comparison-theorem` 比较定理

令 $\theta := \varphi_{n}d_{n+1} : P_{n+1} \to Q_{n}$，算一下：
$$e_{n}\theta = e_{n}\varphi_{n}d_{n+1} = \varphi_{n-1}d_{n}d_{n+1} = 0,$$
所以 $\operatorname{im}\theta \subseteq \ker e_{n} = \operatorname{im} e_{n+1}$（两端的复形都正合）✓。

沿满射 $Q_{n+1} \twoheadrightarrow \operatorname{im} e_{n+1}$ 用 $P_{n+1}$ 的投射性抬升 $\theta$，得 $\varphi_{n+1}$ ✓。

> 续见 proofs/imp.comparison-theorem.3.md
