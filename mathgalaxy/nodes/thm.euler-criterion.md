# Euler 判别法　`thm.euler-criterion`
$\left(\frac{a}{p}\right) \equiv a^{(p-1)/2}$
layer 15 · 定理 · 二次剩余与原根 · 数论
[在星图里打开](../#n=thm.euler-criterion)　·　[节点索引](../index.md)

设 $p$ 是奇素数，$p \nmid a$。则

$$\left(\frac{a}{p}\right) \equiv a^{\frac{p-1}{2}} \pmod p .$$

## 为什么成立（入边，证明在 proofs/）
- [`def.order-mod-n`](../nodes/def.order-mod-n.md) 模 n 的阶：Euler 判别法：$a^{(p-1)/2}$ 只能等于 $\pm 1$　[proofs/imp.nt-euler-criterion.md](../proofs/imp.nt-euler-criterion.md)
- [`def.legendre-symbol`](../nodes/def.legendre-symbol.md) Legendre 符号：用到了定义 Legendre 符号　[proofs/e150:definition.md](../proofs/e150:definition.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.euler-criterion.2.md](./thm.euler-criterion.2.md)

refs: 华罗庚《数论导引》第四章

> 说明见 `notes/thm.euler-criterion.md`

引用：`thm.euler-criterion`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
