# 预拓扑下的层 $\iff$ 正合列
`imp.sheaf-descent` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `def.pretopology` 预拓扑 + `def.sieve` 筛 → `thm.sheaf-descent` 层的下降条件

设覆盖族 $(X_{i} \to X)_{i \in I}$ 生成的筛是 $R$。按定义，$R$ 的截面是那些能「穿过某个 $X_{i}$」的映射：

$$R(Y) = \{\, f : Y \to X \ \mid\ \exists i,\ \exists h : Y \to X_{i},\ f = f_{i} \circ h \,\}$$

而 $R$ 作为预层，是那些 $h_{Y}$ 沿 $(Y \to X_{i})_{i}$ 的余极限 —— 换句话说

$$R \;\cong\; \varinjlim_{i} h_{X_{i}}$$

（指标是这个覆盖族，余极限在预层范畴里取。）于是：

$$\operatorname{Hom}(R, F) \;\cong\; \operatorname{Hom}\Bigl(\varinjlim_{i} h_{X_{i}},\ F\Bigr) \;\cong\; \varprojlim_{i} \operatorname{Hom}(h_{X_{i}}, F) \;\cong\; \varprojlim_{i} F(X_{i})$$

> 续见 proofs/imp.sheaf-descent.2.md
