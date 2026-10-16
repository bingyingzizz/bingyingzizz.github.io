# FCHaus 上层的判据　`prop.fchaus-sheaf`　·　说明
根 `../`

**证明。** $\mathbf{FCHaus}$ 上的覆盖就是「有限不交并」，即 $F = \coprod_{i \in I} F_{i}$（$I$ 有限）。对它写层条件：
$$X(F) \longrightarrow \prod_{i} X(F_{i}) \rightrightarrows \prod_{i,j} X(F_{i} \times_{F} F_{j}).$$
- 由不交性，$i \ne j$ 时 $F_{i} \times_{F} F_{j} = \emptyset$、$i = j$ 时 $= F_{i}$。于是右边那对映射一个是恒等、另一个把 $i \ne j$ 的分量送到 $X(\emptyset)$ —— 而 $X(\emptyset)$ 由 $I = \emptyset$ 的层条件（$X$ 保空余积）给出 $X(\emptyset) \cong \{\ast\}$。
- 所以层条件正合化归为 $X\bigl(\coprod_{i} F_{i}\bigr) \cong \prod_{i} X(F_{i})$ —— 这正是「保有限积」。
反过来，若 $X$ 保有限积，则上述每一条层条件自动成立。∎
⭐ **用处**：这一条把「$\mathrm{Cond}$ 里的层」换成了一句纯代数的话 ——「保有限积的函子」。于是验一条性质是不是层，只要验它是否保有限积。
