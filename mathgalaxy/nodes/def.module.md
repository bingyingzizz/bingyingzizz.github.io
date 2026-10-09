# 模　`def.module`
模与模同态（Module）
layer 8 · 定义 · 代数结构 · 抽象代数

设 $A$ 是含幺环、$M$ 是**阿贝尔群**。称 $M$ 是一个 **$A$-模**，如果给定了一个映射

$$A \times M \longrightarrow M, \qquad (a, m) \longmapsto a \cdot m,$$

满足 $a(bm) = (ab)m$、$(a + b)m = am + bm$、$a(m + n) = am + an$、$1 \cdot m = m$。

保持这个作用的加法群同态叫 **$A$-模同态**：$f(am) = a f(m)$。全体 $A$-模与模同态构成范畴 $A\text{-}\mathbf{Mod}$。

## 为什么成立（入边，证明在 proofs/）
- `def.group` 群：用到了定义 群　proofs/def-dep.module-group.md
- `def.ring` 环：用到了定义 环　proofs/def-dep.module-ring.md

## 它能推出什么 / 谁在用它
- 被 `thm.freyd-mitchell` Freyd–Mitchell 嵌入定理 用
- 被 `ex.algebra-categories` 代数的几个范畴 用

> 说明见 `notes/def.module.md`
