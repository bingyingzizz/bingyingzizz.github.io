# 导出列的三条函子性 $\implies$ 封闭性
`imp.solvable-quotients` · 推出 · strong 边 · 根 `../`

`def.solvable-group` 可解群 + `thm.first-iso` 第一同构定理（Noether） → `thm.solvable-quotients` 可解性对子群与商群封闭

先记两个初等事实：若 $\varphi : G \to G'$ 是满同态，则 $\varphi(G^{(k)}) = (G')^{(k)}$（换位子被送到换位子，且满射保证反向也成立）。

**（a）** 设 $G$ 可解，$G^{(n)} = \{e\}$。因 $H \le G$ 蕴含 $H^{(k)} \le G^{(k)}$（对 $k$ 归纳：$[H,H] \le [G,G]$，再逐层），故 $H^{(n)} \le G^{(n)} = \{e\}$，即 $H^{(n)} = \{e\}$。

**（b）** 设 $\pi : G \to G/N$ 是自然满同态。由上面的事实

$$(G/N)^{(n)} = \pi(G^{(n)}) = \pi(\{e\}) = \{e\},$$

故 $G/N$ 可解。

> 续见 proofs/imp.solvable-quotients.2.md
