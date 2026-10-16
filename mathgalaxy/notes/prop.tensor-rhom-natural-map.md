# 张量与 RHom 的配对　`prop.tensor-rhom-natural-map`　·　说明
根 `../`

**证明（由两条配对拼出来）。**
- **求值配对**：$\operatorname{RHom}(M, P) \otimes^{\mathbf{L}} M \to P$（把映射作用在元素上，由内部 Hom 与导出张量的伴随给出）✓；
- **复合配对**：$P \otimes^{\mathbf{L}} \operatorname{RHom}(P, N) \to N$，同理 ✓。
把两者张量起来：
$$M \otimes^{\mathbf{L}} \operatorname{RHom}(M, P) \otimes^{\mathbf{L}} \operatorname{RHom}(P, N) \longrightarrow P \otimes^{\mathbf{L}} \operatorname{RHom}(P, N) \longrightarrow N.$$
再用**内部 Hom 与导出张量的伴随**（$A \otimes^{\mathbf{L}} X \to N$ 等价于 $X \to \operatorname{RHom}(A, N)$），取 $A = \operatorname{RHom}(M, P)$、$X = M \otimes^{\mathbf{L}} \operatorname{RHom}(P, N)$，上面这个映射一一对应于
$$M \otimes^{\mathbf{L}} \operatorname{RHom}(P, N) \longrightarrow \operatorname{RHom}\bigl(\operatorname{RHom}(M, P),\ N\bigr) ✓$$
自然性来自两层配对都自然（伴随同构对三个变量都自然）✓。∎

> 续见 notes/prop.tensor-rhom-natural-map.2.md
