# 拟紧 与 拟紧拟分离 的判定　`thm.qcqs-chaus-equiv`　·　说明
根 `../`

**证明（两条都是一般拓扑斯上的定理在 $\mathrm{Cond}$ 上的特例）。**
- **第 1 条**：「拟紧」在拓扑斯里的等价刻画是「存在从**投射 / 自由**对象的满射」—— 反向显然（满射 $F \twoheadrightarrow X$ 给出一个覆盖，用 $F$ 的参数化把有限子覆盖抽出来，因为自由对象 $F = \beta I$ 是「由点集生成」的，有限性是逐点的）；正向用 $\mathbf{FCHaus}$ 张成 $\mathbf{CHaus}$ 再把覆盖的参数压进一个自由对象。
- **第 2 条**：拟紧拟分离 的对象由「它到各紧 Hausdorff 块的值」决定，而 $\mathrm{Cond}$ 里紧 Hausdorff 空间 $S$ 表示的层 $\underline{S} = h_{S}$ 正是 拟紧拟分离 的（拟紧 由 $S \to S$ 本身给出；qs 由「紧 Hausdorff 的两块相交还是紧 Hausdorff」给出）。于是 $S \mapsto \underline{S}$ 全忠实；本质满则是上一条与拟分离的刻画拼起来。∎
