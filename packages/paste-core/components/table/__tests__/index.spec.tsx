import * as React from 'react';
import {axe} from 'jest-axe';
import {matchers} from 'jest-emotion';
import {render, screen} from '@testing-library/react';
import {Table, THead, TBody, TFoot, Td, Tr, Th} from '../src';

expect.extend(matchers);

describe('Table', () => {
  it('it should render auto tableLayout style', (): void => {
    render(
      <Table data-testid="mockAutoTable">
        <TBody>
          <Tr>
            <Td>Column 1</Td>
            <Td>Column 2</Td>
          </Tr>
        </TBody>
      </Table>
    );
    const renderedTable = screen.getByTestId('mockAutoTable');
    expect(renderedTable).toHaveStyleRule('table-layout', 'auto');
  });

  it('it should render fixed tableLayout style', (): void => {
    render(
      <Table variant="fixed" data-testid="mockFixedTable">
        <TBody>
          <Tr>
            <Td>Column 1</Td>
            <Td>Column 2</Td>
          </Tr>
        </TBody>
      </Table>
    );
    const renderedTable = screen.getByTestId('mockFixedTable');
    expect(renderedTable).toHaveStyleRule('table-layout', 'fixed');
  });

  it('it should render Tr top vertical alignment styles', (): void => {
    render(
      <Table>
        <TBody>
          <Tr verticalAlignment="top" data-testid="mockTr">
            <Td>Column 1</Td>
          </Tr>
        </TBody>
      </Table>
    );
    const renderedTr = screen.getByTestId('mockTr');
    expect(renderedTr).toHaveStyleRule('vertical-align', 'top');
  });

  it('it should render Tr middle vertical alignment styles', (): void => {
    render(
      <Table>
        <TBody>
          <Tr data-testid="mockTr">
            <Td>Column 1</Td>
          </Tr>
        </TBody>
      </Table>
    );
    const renderedTr = screen.getByTestId('mockTr');
    expect(renderedTr).toHaveStyleRule('vertical-align', 'middle');
  });

  it('it should render Tr bottom vertical alignment styles', (): void => {
    render(
      <Table>
        <TBody>
          <Tr verticalAlignment="bottom" data-testid="mockTr">
            <Td>Column 1</Td>
          </Tr>
        </TBody>
      </Table>
    );
    const renderedTr = screen.getByTestId('mockTr');
    expect(renderedTr).toHaveStyleRule('vertical-align', 'bottom');
  });

  it('it should render Th width and left alignment styles', (): void => {
    render(
      <Table>
        <THead>
          <Tr>
            <Th width="size50" data-testid="mockTh">
              Column 1
            </Th>
          </Tr>
        </THead>
      </Table>
    );
    const renderedTh = screen.getByTestId('mockTh');
    expect(renderedTh).toHaveStyleRule('width', 'size50');
    expect(renderedTh).toHaveStyleRule('text-align', 'left');
  });

  it('it should render Th center alignment styles', (): void => {
    render(
      <Table>
        <THead>
          <Tr>
            <Th alignment="center" data-testid="mockTh">
              Column 1
            </Th>
          </Tr>
        </THead>
      </Table>
    );
    const renderedTh = screen.getByTestId('mockTh');
    expect(renderedTh).toHaveStyleRule('text-align', 'center');
  });

  it('it should render Th right alignment styles', (): void => {
    render(
      <Table>
        <THead>
          <Tr>
            <Th alignment="right" data-testid="mockTh">
              Column 1
            </Th>
          </Tr>
        </THead>
      </Table>
    );
    const renderedTh = screen.getByTestId('mockTh');
    expect(renderedTh).toHaveStyleRule('text-align', 'right');
  });

  it('it should render Td width and left alignment styles', (): void => {
    render(
      <Table>
        <TBody>
          <Tr>
            <Td width="size50" data-testid="mockTd">
              Column 1
            </Td>
          </Tr>
        </TBody>
      </Table>
    );
    const renderedTd = screen.getByTestId('mockTd');
    expect(renderedTd).toHaveStyleRule('width', 'size50');
    expect(renderedTd).toHaveStyleRule('text-align', 'left');
  });

  it('it should render Td center alignment styles', (): void => {
    render(
      <Table>
        <TBody>
          <Tr>
            <Td alignment="center" data-testid="mockTd">
              Column 1
            </Td>
          </Tr>
        </TBody>
      </Table>
    );
    const renderedTd = screen.getByTestId('mockTd');
    expect(renderedTd).toHaveStyleRule('text-align', 'center');
  });

  it('it should render Td right alignment styles', (): void => {
    render(
      <Table>
        <TBody>
          <Tr>
            <Td alignment="right" data-testid="mockTd">
              Column 1
            </Td>
          </Tr>
        </TBody>
      </Table>
    );
    const renderedTd = screen.getByTestId('mockTd');
    expect(renderedTd).toHaveStyleRule('text-align', 'right');
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <Table>
          <THead>
            <Tr>
              <Th>Column 1</Th>
              <Th>Column 2</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>1</Td>
              <Td>Empty</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Empty</Td>
            </Tr>
          </TBody>
          <TFoot>
            <Tr>
              <Td>100</Td>
              <Td>end</Td>
            </Tr>
          </TFoot>
        </Table>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
