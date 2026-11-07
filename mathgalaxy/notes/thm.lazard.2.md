# 平坦模的结构定理　`thm.lazard`　·　说明
根 `../`

**在引理 L 下完成 $(\implies)$。** 构造系统 $\mathcal{I}$：对象为 $(R^n,\chi)$，其中 $\chi:R^n\to F$ 是有限自由模到 $F$ 的映射；态射为交换三角。它是有向的：两个映射经 $R^m\oplus R^n\to F$ 合并，再用引理 L 把该映射经某个 $R^k\to F$ 分解。

- 平行映射被等同：若 $u,v:R^n\to F$ 有相同的像，则 $P:=R^n/\operatorname{im}(u-v)$ 有限呈现（有限自由模商去有限生成子模），引理 L 把 $R^n\to F$ 经 $R^k$ 分解，从而 $u,v$ 在系统中被等同。 - 满射：对任意 $x\in F$，映射 $R\to F$、$1\mapsto x$ 属于系统，故 $x$ 在余极限的像中。 - 单射：若 $(R^n,\chi)$ 与 $(R^n,\chi')$ 在余极限中给出同一元素，则 $\chi-\chi'$ 的某个有限部分为零；用 $P=R^n/\ker$ 的有限呈现性 + 引理 L 得到等同。

于是 $F\cong\varinjlim_{(R^n,\chi)} R^n$，每个 $R^n$ 有限生成自由，指标集有向。□（**本定理在本图未证**：上面只是「在引理 L 下」的条件证明；节点保留 skeleton，等引理 L 有了节点再补。）

> 续见 notes/thm.lazard.3.md
