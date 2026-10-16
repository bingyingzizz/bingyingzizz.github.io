# 简单函数　`def.simple-function`
简单函数（Simple Function）
layer 7 · 定义 · 可测函数与收敛 · 分析学
[在星图里打开](../#n=def.simple-function)　·　[节点索引](../index.md)

可测函数 $\varphi : X \to \mathbb{C}$ 是**简单函数**，当且仅当它只取**有限多个值**。等价地，它可以写成

$$\varphi = \sum_{j=1}^{n} a_j \chi_{E_j}$$

其中 $a_j \in \mathbb{C}$，$E_j = \varphi^{-1}(\{a_j\}) \in \mathcal{M}$ 两两不交。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.simple-function.2.md](./def.simple-function.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.simple-function.3.md](./def.simple-function.3.md)

refs: Folland, Real Analysis, §2.2

## 说明
简单函数就是可测版本的「阶梯函数」—— 有限个「台阶」。

它是整个积分理论的**起点**：先给简单函数定义积分（就是加权和），再用「简单函数从下面逼近」把积分推广到一切非负可测函数。

引用：`def.simple-function`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
