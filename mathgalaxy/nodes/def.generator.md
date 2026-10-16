# 生成元集　`def.generator`
生成元集与生成元（Generators）
layer 10 · 定义 · 拓扑斯 · 范畴论
[在星图里打开](../#n=def.generator)　·　[节点索引](../index.md)

范畴 $\mathcal{C}$ 的一个集合 $S \subseteq \mathcal{C}$ 叫**生成元集**，如果函子

$$\prod_{a \in S} h_{a} : \mathcal{C} \longrightarrow \mathbf{Set}^{S}, \qquad X \mapsto \bigl(\operatorname{Hom}_{\mathcal{C}}(a, X)\bigr)_{a \in S}$$

是**忠实**的。等价地：只要 $f \ne g : X \to Y$，就存在 $a \in S$ 与 $g_{0} : a \to X$ 使 $f \circ g_{0} \ne g \circ g_{0}$。$S = \{G\}$ 时，$G$ 叫**生成元**。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.giraud`](../nodes/thm.giraud.md) Giraud 定理

- …另有出边，续页见 [nodes/def.generator.3.md](./def.generator.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.generator.2.md](./def.generator.2.md)

refs: Le Stum, An introduction to condensed mathematics, §3.3

> 说明见 `notes/def.generator.md`

引用：`def.generator`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
