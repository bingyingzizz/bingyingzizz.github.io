# 链上的积分　`def.integral-on-chain`　·　续页（第 2 页）
[在星图里打开](../#n=def.integral-on-chain)　·　第 1 页 [nodes/def.integral-on-chain.md](./def.integral-on-chain.md)

## 陈述（续）
设 $c : I^{k}\to M$ 是 $k$-方块，$\omega$ 是定义在 $c$ 的像的某个邻域上的 $k$-形式。在 $I^{k}$ 上 $c^{\ast}\omega$ 仍是 $k$-形式，而 $k$ 维区域的 $k$-形式只有一个分量，故存在唯一的 $f\in C^{\inft
y}(I^{k})$ 使
$$c^{\ast}\omega = f\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{k}.$$

定义方块上的积分
$$\int_{c}\omega := \int_{I^{k}}f = \int_{0}^{1}\cdots\int_{0}^{1}f(x)\,\mathrm{d}x^{1}\cdots\mathrm{d}x^{k},$$

再对链线性延拓：
$$\int_{\sum_{l}n_{l}c_{l}}\omega := \sum_{l}n_{l}\int_{c_{l}}\omega .$$

$k = 0$ 的约定：$0$-方块是点 $p$，$0$-形式是函数，$\int_{p}F := F(p)$，$\int_{\sum n_{l}p_{l}}F := \sum_{l}n_{l}F(p_{l})$。

> 续见 [nodes/def.integral-on-chain.3.md](./def.integral-on-chain.3.md)
