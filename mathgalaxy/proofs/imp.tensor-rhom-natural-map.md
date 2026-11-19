# imp.tensor-rhom-natural-map
`imp.tensor-rhom-natural-map` · 推出 · strong 边 · 根 `../`

`def.internal-hom` 内 Hom + `def.tensor-abelian-sheaf` 阿贝尔层的张量积 → `prop.tensor-rhom-natural-map` 张量与导出 Hom 的配对

**证明（由两条配对拼出来）。**
- **求值配对**：$\operatorname{RHom}(M, P) \otimes^{\mathbf{L}} M \to P$（把映射作用在元素上，由内部 Hom 与导出张量的伴随给出）✓；
- **复合配对**：$P \otimes^{\mathbf{L}} \operatorname{RHom}(P, N) \to N$，同理 ✓。
把两者张量起来：
$$M \otimes^{\mathbf{L}} \operatorname{RHom}(M, P) \otimes^{\mathbf{L}} \operatorname{RHom}(P, N) \longrightarrow P \otimes^{\mathbf{L}} \operatorname{RHom}(P, N) \longrightarrow N.$$
再用**内部 Hom 与导出张量的伴随**（$A \otimes^{\mathbf{L}} X \to N$ 等价于 $X \to \operatorname{RHom}(A, N)$），取 $A = \operatorname{RHom}(M, P)$、$X = M \otimes^{\mathbf{L}} \operatorname{RHom}(P, N)$，上面这个映射一一对应于
$$M \otimes^{\m

> 续见 proofs/imp.tensor-rhom-natural-map.2.md
