# 幂对象　`def.power-object`
幂对象 $Y^{X}$：积的左伴随，即「函数空间」的对象化
layer 10 · 定义 · 单满、子对象与像 · 范畴论
[在星图里打开](../#n=def.power-object)　·　[节点索引](../index.md)

设 $\mathcal{C}$ 有有限积，$X, Y \in \mathcal{C}$。若存在对象 $Y^{X}$ 与态射 $\operatorname{ev} : Y^{X} \times X \to Y$，使得对任意 $Z$ 与任意 $f : Z \times X \to Y$，存在**唯一**的 $\tilde f : Z \to Y^{X}$ 使

$$\operatorname{ev} \circ (\tilde f \times \operatorname{id}_{X}) = f,$$

就说 $Y^{X}$ 是 $Y$ 对 $X$ 的**幂对象**（exponential object），$\operatorname{ev}$ 叫**求值映射**。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.power-object.2.md](./def.power-object.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.power-object.3.md](./def.power-object.3.md)

refs: Mac Lane, Categories for the Working Mathematician, §IV.6

> 说明见 `notes/def.power-object.md`

引用：`def.power-object`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
