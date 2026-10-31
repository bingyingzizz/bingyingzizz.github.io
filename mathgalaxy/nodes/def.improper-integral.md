# 反常积分　`def.improper-integral`
反常积分：无穷区间与无界函数
layer 17 · 定义 · Riemann 积分 · 数学分析
[在星图里打开](../#n=def.improper-integral)　·　[节点索引](../index.md)

**无穷区间**：若 $f$ 在每个 $[a, R]$ 上可积，定义

$$\int_a^{+\infty} f := \lim_{R \to +\infty} \int_a^{R} f$$

（极限存在且有限时称**收敛**，否则称发散）。

**无界函数**：若 $f$ 在 $[a, b]$ 上无界、但在每个 $[a, b - \varepsilon]$ 上可积，定义

$$\int_a^{b} f := \lim_{\varepsilon \to 0^{+}} \int_a^{b - \varepsilon} f$$

两种情况可以混合（既是无穷区间又无界），此时要**分段**处理：每一段都必须收敛。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.improper-integral.2.md](./def.improper-integral.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.improper-integral.3.md](./def.improper-integral.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 6

> 说明见 `notes/def.improper-integral.md`

引用：`def.improper-integral`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
