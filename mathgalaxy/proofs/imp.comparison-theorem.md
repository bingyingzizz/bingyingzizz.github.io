# imp.comparison-theorem
`imp.comparison-theorem` · 推出 · strong 边 · 根 `../`

`def.resolution` 消解 + `def.projective-object` 投射 / 内射对象 + `def.chain-homotopy` 链同伦 → `thm.comparison-theorem` 比较定理

**证明（一）存在性：逐层抬升。**
第 $0$ 层：$f\varepsilon_{P} : P_{0} \to N$ 沿满射 $\varepsilon_{Q} : Q_{0} \twoheadrightarrow N$ 抬升。

$P_{0}$ 投射，故存在 $\varphi_{0} : P_{0} \to Q_{0}$ 使 $\varepsilon_{Q}\varphi_{0} = f\varepsilon_{P}$ ✓。
归纳步：设 $\varphi_{n} : P_{n} \to Q_{n}$ 已造好，且 $e_{n}\varphi_{n} = \varphi_{n-1}d_{n}$。

要造 $\varphi_{n+1}$，只需使 $e_{n+1}\varphi_{n+1} = \varphi_{n}d_{n+1}$。

> 续见 proofs/imp.comparison-theorem.2.md
