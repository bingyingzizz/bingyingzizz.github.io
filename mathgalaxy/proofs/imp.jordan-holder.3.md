# Zassenhaus（蝴蝶）引理 + Schreier 加细 $\implies$ Jordan–Hölder
`imp.jordan-holder` · 推出 · strong 边 · 根 `../`

`def.composition-series` 合成列 → `thm.jordan-holder` Jordan–Hölder 定理

**引理 2（Schreier）**：任意两条正规链都有**等价**的加细（两条加细的因子多重集相同）。

*证明*：只需证一条链与任一链能通过反复插入中间项互相加细到等价。设链为 $\cdots \trianglelefteq G_i \trianglelefteq G_{i+1} \trianglelefteq \cdots$，插入 $H_j$ 时在区间 $[G_i, G_{i+1}]$ 上插入

$$G_i(H_j \cap G_{i+1}) \ \text{与}\ G_i(H_{j+1}\cap G_{i+1})$$

> 续见 proofs/imp.jordan-holder.4.md
