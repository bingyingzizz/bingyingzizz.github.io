# 导出列的三条函子性 $\implies$ 封闭性
`imp.solvable-quotients` · 推出 · strong 边 · 根 `../`

`def.solvable-group` 可解群 + `thm.first-iso` 第一同构定理（Noether） → `thm.solvable-quotients` 可解性对子群与商群封闭

**（c）** 设 $N$ 可解、$G/N$ 可解。取 $n$ 使 $(G/N)^{(n)} = \{e\}$，即 $\pi(G^{(n)}) = \{e\}$，也就是 $G^{(n)} \le N$。再取 $m$ 使 $N^{(m)} = \{e\}$。于是

$$G^{(n+m)} = \bigl(G^{(n)}\bigr)^{(m)} \le N^{(m)} = \{e\},$$

（第一步用了同样的事实 $[H,H]$ 的迭代：$G^{(n+m)} = (G^{(n)})^{(m)}$，因为导出列就是反复取换位子。）故 $G$ 可解。∎

> ⭐ 三条的证明都只用了「$H \le G \implies H^{(k)} \le G^{(k)}$」与「满同态把导出列送到导出列」这两句话 —— 导出列是**函子式**的，所以可解性才这么听话。
