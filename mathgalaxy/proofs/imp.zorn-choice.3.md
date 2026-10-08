# 佐恩引理 $\implies$ 选择公理（路线 $2\implies1$）
`imp.zorn-choice` · 推出 · strong 边 · 根 `../`

`lem.zorn` 佐恩引理 → `ax.choice` 选择公理

$$f' = f \cup \{ (i_0, a) \}$$

仍是 $\mathcal{F}$ 中的元素（$i_{0} \notin \operatorname{dom} f$，不破坏函数性），且 $f \subset f'$ —— 与 $f$ 的极大性矛盾。故 $\operatorname{dom} f = I$。

**⑤** 于是 $f : I \to \bigcup _\{i \in I\} A_i$ 且 $f(i) \in A_i$ 对一切 $i$ 成立，即 $f$ 是这族集合的选择函数。由族的任意性，AC 成立。∎

> 「按包含序取极大元，再证明它已经没法再大」—— 这是用佐恩引理造存在性对象的典型手法。
