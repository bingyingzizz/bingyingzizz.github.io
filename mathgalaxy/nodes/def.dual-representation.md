# 对偶表示　`def.dual-representation`
对偶表示
layer 17 · 定义 · 群与代数表示 · 抽象代数
[在星图里打开](../#n=def.dual-representation)　·　[节点索引](../index.md)

设 $(V,\theta)$ 是 $A$ 的表示。对偶空间 $V^*=\operatorname{Hom}_F(V,F)$ 上取 $\theta^*(a)\ell=\ell\circ\theta(a)$。由于 $\theta^*(ab)=\theta^*(b)\theta^*(a)$，$V^*$ 是反代数 $A^{\mathrm{op}}$ 的表示，一般不是 $A$ 的表示。对群表示，$\rho^*(g)=\rho(g^{-1})^T$ 使 $V^*$ 
> 陈述续见 [nodes/def.dual-representation.2.md](./def.dual-representation.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.dual-representation.3.md](./def.dual-representation.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.dual-representation.4.md](./def.dual-representation.4.md)

refs: Serre, Linear Representations of Finite Groups (GTM 42), Part I

## 说明
转置约定由反变性逼出：$\theta^*$ 是反同态。
群情形用逆元恢复真正的作用。
在基下，$\rho^*(g)$ 的矩阵是 $\rho(g)$ 的逆转置。
有限维时双对偶与 $V$ 自然同构。

引用：`def.dual-representation`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
