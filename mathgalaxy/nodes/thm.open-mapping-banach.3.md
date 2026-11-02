# 开映射定理（Banach 版）　`thm.open-mapping-banach`　·　续页（第 3 页）
[在星图里打开](../#n=thm.open-mapping-banach)　·　第 1 页 [nodes/thm.open-mapping-banach.md](./thm.open-mapping-banach.md)　·　上一页 [nodes/thm.open-mapping-banach.2.md](./thm.open-mapping-banach.2.md)

## 陈述（续）
**证明的第一步就是纲**（这也是你看到的版本为何那样陈述）：

$$E = \bigcup_{k \ge 1} \overline{k\,B_E} \quad\Longrightarrow\quad u(E) = F = \bigcup_{k} \overline{u(kB_E)} ,$$
右端是可数个闭集之并，由纲定理（`thm.baire`）其中某个 $\overline{u(kB_E)}$ 必须含内点；再用「$k$ 倍」与「平移」把它搬回 $0$，得 $\overline{u(B_E)} \supseteq r B_F$。之后第二步才用 $E$ 的**完备性**去掉闭包（`imp.fa-openmap`）。

> 续见 [nodes/thm.open-mapping-banach.4.md](./thm.open-mapping-banach.4.md)
