# 局部化　`def.localization`
范畴的局部化（Localization）
layer 10 · 定义 · 范畴与图 · 范畴论
[在星图里打开](../#n=def.localization)　·　[节点索引](../index.md)

设 $\mathcal{C}$ 是范畴，$W$ 是 $\mathcal{C}$ 中一族态射（想「当成同构」的那些）。$\mathcal{C}$ 关于 $W$ 的**局部化** $\mathrm{ho}(\mathcal{C})$ 是这样一个范畴，连同函子 $\gamma : \mathcal{C} \to \mathrm{ho}(\mathcal{C})$：

1. 对每个 $w \in W$，$\gamma(w)$ 是同构；
2. **泛性质**：对任何函子 $F : \mathcal{C} \to \mathcal{D}$ 使每个 $w \in W$ 的像都是同构，存在唯一的 $\overline{F} : \mathrm{ho}(\mathcal{C}) \to \mathcal{D}$ 使 $\overline{F} \circ \gamma = F$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.localization.2.md](./def.localization.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.localization.3.md](./def.localization.3.md)

refs: Le Stum, An introduction to condensed mathematics, §1.1

> 说明见 `notes/def.localization.md`

引用：`def.localization`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
