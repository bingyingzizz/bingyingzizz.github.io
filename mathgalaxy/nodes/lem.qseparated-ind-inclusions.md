# 拟分离即含入的滤过余极限　`lem.qseparated-ind-inclusions`
拟分离 $\iff$ 紧 Hausdorff 块沿含入拼起来
layer 17 · 引理 · 凝聚态集 · 凝聚态数学

凝聚态集 $X$ 是**拟分离**的 $\iff$ 它可以写成

$$X \cong \varinjlim_{i \in I}\ S_{i},$$

其中每个 $S_{i}$ 是紧 Hausdorff 空间、每个过渡映射 $S_{i} \hookrightarrow S_{j}$ 都是**含入**。

**推论**：$\operatorname{Ind}(\mathbf{CHaus})$ 中那些「过渡映射为单射」的对象，恰好就是 qcqs 的凝聚态集。

## 为什么成立（入边，证明在 proofs/）
- `def.quasi-separated` 拟分离对象：用到了定义 拟分离对象　proofs/def-dep.qsind-qs.md
- `def.filtered-category` 滤过范畴：用到了定义 滤过范畴　proofs/def-dep.qsind-filt.md
- `def.ind-object` Ind-对象：用到了定义 Ind-对象　proofs/def-dep.qsind-ind.md

refs: Le Stum, Lemma 4.2.10

> 说明见 `notes/lem.qseparated-ind-inclusions.md`
