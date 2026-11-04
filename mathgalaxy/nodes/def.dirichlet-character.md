# 狄利克雷特征标　`def.dirichlet-character`
狄利克雷特征标 $\chi \bmod n$：$(\mathbb{Z}/n)^{\times} \to \mathbb{C}^{\times}$，延拓成完全积性函数
layer 30 · 定义 · 数论函数与素数分布 · 数论+抽象代数
[在星图里打开](../#n=def.dirichlet-character)　·　[节点索引](../index.md)

固定 $n \ge 1$。**狄利克雷特征标**（mod $n$）是一个群同态

$$\chi : \bigl(\mathbb{Z}/n\mathbb{Z}\bigr)^{\times} \longrightarrow \mathbb{C}^{\times},$$

再把它**延拓**成 $\mathbb{Z}$ 上的函数：$\chi(a) := \chi(a \bmod n)$ 当 $\gcd(a,n) = 1$，否则 $\chi(a) := 0$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.dirichlet-character.2.md](./def.dirichlet-character.2.md)

refs: Apostol, Introduction to Analytic Number Theory, Ch. 6–7

> 说明见 `notes/def.dirichlet-character.md`

引用：`def.dirichlet-character`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
