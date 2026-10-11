# 像 / 余像　`def.image`
像与余像（Image / Coimage）
layer 15 · 定义 · 单满、子对象与像 · 范畴论

态射 $f : X \to Y$ 的**像** $\operatorname{im} f$ 是 $Y$ 的一个子对象，它在一切分解 $f : X \to I \rightarrowtail Y$ 组成的范畴中是**始对象**（即：任何别的分解都唯一地穿过它）。对偶地，$\operatorname{coim} f$ 是分解 $X \twoheadrightarrow I \to Y$ 的余泛对象。

总有一个态射

$$\operatorname{coim} f \longrightarrow \operatorname{im} f$$

它是同构时，称 $f$ 是**严格的**（strict）。

## 为什么成立（入边，证明在 proofs/）
- `def.subobject` 子对象：用到了定义 子对象　proofs/def-dep.subobject-image.md
- `def.mono` 单态射 / 满态射：用到了定义 单态射 / 满态射　proofs/def-dep.mono-image.md

## 它能推出什么 / 谁在用它
- 被 `prop.pretopos-factorization` 满-单分解 用
- 被 `def.abelian-category` 加法 / 阿贝尔范畴 用
- 被 `thm.five-lemma` 五引理 用
- 被 `def.strict-morphism` 严格态射 用

> 说明见 `notes/def.image.md`

- …另有出边，续页见 `nodes/def.image.2.md`
