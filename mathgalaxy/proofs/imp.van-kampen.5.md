# imp.van-kampen
`imp.van-kampen` · 推出 · strong 边 · 根 `../`

`def.fundamental-group` 基本群 + `def.lebesgue-number` 勒贝格数 + `def.path-homotopy` 道路同伦 + `def.normal-subgroup` 正规子群 → `thm.van-kampen` van Kampen 定理

**第二步（满射）**：令 $\Phi : \pi_{1}(U) * \pi_{1}(V) \to \pi_{1}(X)$ 由两个包含诱导的群同态给出（自由积的泛性质）。第一步说明每个 $[\alpha] \in \pi_{1}(X)$ 都是若干 $\Phi$-像的乘积，故 $\Phi$ 满射。记 $q : \pi_{1}(U) * \pi_{1}(V) \to P := (\pi_{1}(U) * \pi_{1}(V))/N$ 为商映射。由于对 $\gamma \in G$，$\Phi(i_{*}\gamma \cdot j_{*}\gamma^{-1}) = [\gamma]\,[\gamma]^{-1} = 1$，有 $N \subseteq \ker \Phi$，故 $\Phi$ 下降为

$$\bar{\Phi} : P \longrightarrow \pi_{1}(X).$$

它仍是满射。下面构造它的逆。

> 续见 proofs/imp.van-kampen.6.md
