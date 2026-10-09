# 分裂短正合列　`def.split-exact`
分裂的短正合列（Split Exact Sequence）
layer 14 · 定义 · 加法与阿贝尔范畴 · 同调代数

短正合列

$$0 \longrightarrow M_{1} \xrightarrow{\;i_{1}\;} M \xrightarrow{\;i_{2}\;} M_{2} \longrightarrow 0$$
叫**分裂的**，如果它同构于

$$0 \longrightarrow M_{1} \xrightarrow{\;\mathrm{pr}_{1}\;} M_{1} \oplus M_{2} \xrightarrow{\;\mathrm{pr}_{2}\;} M_{2} \longrightarrow 0$$

（即 $i_{1}$ 是到直和第一个分量的含入、$i_{2}$ 是到第二个分量的投影）。

## 为什么成立（入边，证明在 proofs/）
- `def.zero-object` 零对象与直和：用到了定义 零对象与直和　proofs/def-dep.splitexact-zeroobj.md

> 说明见 `notes/def.split-exact.md`
