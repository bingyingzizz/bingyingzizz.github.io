# 子对象的原像　`def.preimage-subobject`
子对象的原像
layer 15 · 定义 · 单满、子对象与像 · 范畴论
[在星图里打开](../#n=def.preimage-subobject)　·　[节点索引](../index.md)

设 $f : X^{\prime} \to X$ 是态射，$Y \rightarrowtail X$ 是 $X$ 的子对象（见 `def.subobject`）。$Y$ 沿 $f$ 的**原像**是纤维积

$$f^{-1}(Y) := Y \times_{X} X^{\prime} \;\longrightarrow\; X^{\prime} ,$$

连同到 $X^{\prime}$ 的投影（若纤维积存在）。它满足泛性：对任意 $g : T \to X^{\prime}$，若 $f \circ g$ 分解过 $Y \rightarrowtail X$，则 $g$ 唯一地分解过 $f^{-1}(Y) \to X^{\prime}$。
> 陈述续见 [nodes/def.preimage-subobject.2.md](./def.preimage-subobject.2.md)


## 它能推出什么 / 谁在用它
- ～弱边 [`def.preimage`](../nodes/def.preimage.md) 像与原像

- …另有出边，续页见 [nodes/def.preimage-subobject.4.md](./def.preimage-subobject.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.preimage-subobject.3.md](./def.preimage-subobject.3.md)

refs: Le Stum, An introduction to condensed mathematics, §1.3

> 说明见 `notes/def.preimage-subobject.md`

引用：`def.preimage-subobject`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
