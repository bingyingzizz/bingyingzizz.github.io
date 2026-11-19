# 分裂域存在　`thm.splitting-field-exists`
分裂域存在：次数不超过 $n!$
layer 16 · 定理 · Galois 理论 · 抽象代数
[在星图里打开](../#n=thm.splitting-field-exists)　·　[节点索引](../index.md)

设 $F$ 是域、$f\in F[x]$ 非零，$n=\deg f$。则 $f$ 在 $F$ 上有分裂域 $K$，且 $[K:F]\le n!$。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.splitting-field-unique`](../nodes/thm.splitting-field-unique.md) 分裂域唯一

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.splitting-field-exists.2.md](./thm.splitting-field-exists.2.md)

refs: Lang, Algebra, Ch. V §2；Hungerford, Algebra, Ch. V §3

## 说明
次数界来自归纳构造：每添加一个根，次数乘以当前不可约因子的次数，最多 $n$ 步；这也是构造性证明给出的上界。

引用：`thm.splitting-field-exists`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
