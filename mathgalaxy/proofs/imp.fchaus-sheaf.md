# imp.fchaus-sheaf
`imp.fchaus-sheaf` · 推出 · strong 边 · 根 `../`

`def.free-compact-hausdorff` 自由紧 Hausdorff 空间 → `prop.fchaus-sheaf` 有限紧 Hausdorff 空间上层的判据

**证明。** $\mathbf{FCHaus}$ 上的覆盖就是「有限不交并」，即 $F = \coprod_{i \in I} F_{i}$（$I$ 有限）。对它写层条件：
$$X(F) \longrightarrow \prod_{i} X(F_{i}) \rightrightarrows \prod_{i,j} X(F_{i} \times_{F} F_{j}).$$
- 由不交性，$i \ne j$ 时 $F_{i} \times_{F} F_{j} = \emptyset$、$i = j$ 时 $= F_{i}$。

于是右边那对映射一个是恒等、另一个把 $i \ne j$ 的分量送到 $X(\emptyset)$ —— 而 $X(\emptyset)$ 由 $I = \emptyset$ 的层条件（$X$ 保空余积）给出 $X(\emptyset) \cong \{\ast\}$。
- 所以层条件正合化归为 $X\bigl(\coprod_{i} F_{i}\bigr) \cong \prod_{i} X(F_{i})$ —— 这正是「保有限积」。
反过来，若 $X$ 保有限积，则上述每一条层条件自动成立。∎
