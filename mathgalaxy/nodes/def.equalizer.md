# 等化子 / 余等化子　`def.equalizer`
等化子与余等化子（Equalizer / Coequalizer）
layer 12 · 定义 · 图与极限 · 范畴论

平行对 $f, g : X \rightrightarrows Y$ 的极限叫**等化子**，记 $\operatorname{eq}(f,g) = \ker(f,g)$；余极限叫**余等化子**，记 $\operatorname{coker}(f,g)$。它们接成

$$\ker(f,g) \longrightarrow X \overset{f}{\underset{g}{\rightrightarrows}} Y \longrightarrow \operatorname{coker}(f,g)$$

且中间的 $\ker(f,g) \to X$ 是单态射、右端的 $Y \to \operatorname{coker}(f,g)$ 是满态射。这一段叫**左正合**。

## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limit-equalizer.md

## 它能推出什么 / 谁在用它
- 被 `def.regular-epi` 正则满态射 用
- 被 `prop.sheaf-mono-epi-iso` 层中单满即同构 用
- 被 `def.effective-equivalence` 有效等价关系 用
- 被 `prop.complex-additive` 复形范畴是加法范畴 用
- 被 `def.cohomology` 同调 用

> 说明见 `notes/def.equalizer.md`

- …另有出边，续页见 `nodes/def.equalizer.2.md`
