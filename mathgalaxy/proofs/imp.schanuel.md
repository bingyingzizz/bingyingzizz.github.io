# imp.schanuel
`imp.schanuel` · 推出 · strong 边 · 根 `../`

`def.projective-object` 投射 / 内射对象 + `def.module` 模 → `lem.schanuel` 合冲比较引理

**证明（纤维积一次搞定）。** 令 $X$ 是 $\pi$ 与 $\pi_{1}$ 的**纤维积**（拉回）
$$X := \{\, (x, x_{1}) \in P \oplus P_{1} : \pi(x) = \pi_{1}(x_{1}) \,\}.$$
两个投影给出交换图，而 $\pi_{1}$ 满、$\pi$ 满分别是「$X \to P$ 满」与「$X \to P_{1}$ 满」的原因 ✓。逐条读核：
- $\ker(X \to P_{1}) = \{\, (x, 0) : \pi(x) = 0 \,\} = K$ ✓；
- $\ker(X \to P) = \{\, (0, x_{1}) : \pi_{1}(x_{1}) = 0 \,\} = K_{1}$ ✓。
于是得到两条短正合列 $0 \to K \to X \to P_{1} \to 0$ 与 $0 \to K_{1} \to X \to P \to 0$。

**第一条分裂**：$P_{1}$ 投射，故 $X \to P_{1}$ 有截面，于是 $X \cong P_{1}\oplus K$ ✓。

**第二条也分裂**（$P$ 投射），于是 $X \cong P\oplus K_{1}$ ✓。

两者一比即得 $P_{1}\oplus K \cong P\oplus K_{1}$ ✓。

∎
