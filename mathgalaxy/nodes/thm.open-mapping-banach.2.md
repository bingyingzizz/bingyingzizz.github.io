# 开映射定理（Banach 版）　`thm.open-mapping-banach`　·　续页（第 2 页）
[在星图里打开](../#n=thm.open-mapping-banach)　·　第 1 页 [nodes/thm.open-mapping-banach.md](./thm.open-mapping-banach.md)

## 陈述（续）
特别地 $u(E) = F$ **不是第一纲集**（也就是说：$F$ 不能被 $u(E)$ 的可数个无处稠密子集覆盖 —— 由于 $u$ 满射，这句话在 $F$ 上自动成立，真正的信息是「$u(B_E)$ 含内点」）。

**为什么这三句话是同一件事**：

1. 若 $u(B_E) \supseteq r B_F$（含球版），则 $u$ 把开集映成开集（把球平移到任意点即得开映射版）；
2. 若 $u$ 是开映射，则 $u(B_E)$ 是含 $0$ 的开集，自然含球；

3. 若 $u(E)$ 在某个开集里是第二纲的，则 $u(E)$ 不可能被可数个无处稠密集覆盖 —— 而 $E = \bigcup_k \overline{kB_E}$，于是某个 $\overline{u(kB_E)}$ 必含内点（否则可数个无处稠密集覆盖了 $u(E)$ 的一个开集，与第二纲矛盾）。

**证明的第一步就是纲**（这也是你看到的版本为何那样陈述）：

> 续见 [nodes/thm.open-mapping-banach.3.md](./thm.open-mapping-banach.3.md)
